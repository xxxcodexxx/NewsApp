using NEWS.WEB.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
namespace NEWS.WEB.Controllers
{
    public class HomeController : Controller
    {
        DBContext db = new DBContext();
        public ActionResult Index()
        {
            var news = db.News.Where(w => w.Status == (int?)CommonStatus.Acitivy);
            return View(news.ToList());
        }

        public JsonResult LoadCategories()
        {
            var obj = db.Categories.ToList();
            return Json(obj, JsonRequestBehavior.AllowGet);
        }

        public ActionResult List(string categoryname)
        {
            var category = db.Categories.FirstOrDefault(f => f.CategoryName == categoryname && f.Status == (int?)CommonStatus.Acitivy);
            if (category != null)
            {
                var categoryid = category.CategoryId;
                var list = db.News.Where(w => w.CategoryId == categoryid && w.Status == (int?)CommonStatus.Acitivy);
                return View(list.ToList());
            }
            return View();
        }

        public ActionResult Detail(int id)
        {
            var item = db.News.FirstOrDefault(w => w.NewsId == id && w.Status == (int?)CommonStatus.Acitivy);
            if (item != null)
            {
                ++item.ViewCount;
                db.SaveChanges();
            }
            return View(item);
        }
        public ActionResult Search(string txtSearch = "")
        {
            var item = db.News.Where(w => w.Status == (int?)CommonStatus.Acitivy && (w.Description.Contains(txtSearch) || w.Content.Contains(txtSearch) || w.Title.Contains(txtSearch) || w.Tags.Contains(txtSearch)));
            return View(item);
        }
        public JsonResult TopViewPartial()
        {
            var news = db.News.Where(w => w.Status == (int?)CommonStatus.Acitivy).OrderByDescending(o => o.ViewCount).Take(3).ToList();
            return Json(news, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult TopNewestPartial()
        {
            object newest = null;
            var listnews = db.News.Where(w => w.Status == (int?)CommonStatus.Acitivy).OrderByDescending(o => o.CategoryId).Skip(1).Take(9).ToList();
            var item = db.News.Where(w => w.Status == (int?)CommonStatus.Acitivy).OrderByDescending(o => o.CategoryId).FirstOrDefault();
            ViewModels.TopNewestViewModels viewmodel = new ViewModels.TopNewestViewModels();
            viewmodel.listnewsItem = listnews.ToList();
            viewmodel.newsItem = item;
            newest = new { listnews, item };
            return Json(viewmodel, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult TopNewestByCategoryPartial(string categoryname)
        {
            var cate = db.Categories.FirstOrDefault(f => f.CategoryName == categoryname && f.Status == (int?)CommonStatus.Acitivy);
            if (cate != null)
            {
                var categoryid = cate.CategoryId;
                var listnews = db.News.Where(w => w.Status == (int?)CommonStatus.Acitivy && w.CategoryId == categoryid).OrderByDescending(o => o.CategoryId).Skip(1).Take(4);
                var item = db.News.Where(w => w.Status == (int?)CommonStatus.Acitivy && w.CategoryId == categoryid).OrderByDescending(o => o.CategoryId).FirstOrDefault();
                ViewModels.TopNewestViewModels viewmodel = new ViewModels.TopNewestViewModels();
                viewmodel.listnewsItem = listnews.ToList();
                viewmodel.newsItem = item;
                return Json(viewmodel, JsonRequestBehavior.AllowGet);
            }
            return Json(null, JsonRequestBehavior.AllowGet);
        }


    }
}
