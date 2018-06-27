using NEWS.WEB.Models;
using NEWS.WEB.ViewModels;
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

        public JsonResult LoadCategoryAndChild(int categoryId)
        {
            object obj;
            var cate = db.Categories.Where(c => c.CategoryId == categoryId).FirstOrDefault();
            if (cate != null)
            {
                var article1 = db.News.Where(n => n.CategoryId == cate.CategoryId).OrderBy(n=>n.CreatedTime).Skip(0).Take(1);
                CategoryViewModel cateVM = new CategoryViewModel(cate.CategoryId, cate.CategoryName, cate.ParentId, cate.Status, cate.CategoryDisplayName, cate.OrderBy);
                if (cateVM.ChildCategory != null) { 
                }
                obj = new {cateVM, article1 };
                return Json(obj, JsonRequestBehavior.AllowGet );
            }
            return Json(null, JsonRequestBehavior.AllowGet);
        }

        public JsonResult LoadCategories()
        {
            var obj = db.Categories.Where(c=>c.ParentId == 0).OrderBy(c => c.OrderBy).ToList();
            List<CategoryViewModel> lsCate = new List<CategoryViewModel>();
            foreach (var item in obj)
            {
                lsCate.Add(new CategoryViewModel(item.CategoryId, item.CategoryName, item.ParentId, item.Status, item.CategoryDisplayName, item.OrderBy));
            }
            return Json(lsCate, JsonRequestBehavior.AllowGet);
        }
        


        public ActionResult List(string categoryname)
        {
            var category = db.Categories.FirstOrDefault(f => f.CategoryName == categoryname && f.Status == (int?)CommonStatus.Acitivy);
            if (category != null)
            {
                var categoryid = category.CategoryId;
                var list = db.News.Where(w => w.CategoryId == categoryid && w.Status == (int?)CommonStatus.Acitivy).OrderByDescending(o=>o.NewsId);
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
            var item = db.News.Where(w => w.Status == (int?)CommonStatus.Acitivy && (w.Description.Contains(txtSearch) || w.Content.Contains(txtSearch) || w.Title.Contains(txtSearch) || w.Tags.Contains(txtSearch))).OrderByDescending(o => o.NewsId);
            return View(item);
        }
        public JsonResult TopViewPartial()
        {
            var news = db.News.Where(w => w.Status == (int?)CommonStatus.Acitivy).OrderByDescending(o => o.ViewCount).Take(2).ToList();
            return Json(news, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult TopNewestPartial()
        {
            object newest = null;
            var listnews = db.News.Where(w => w.Status == (int?)CommonStatus.Acitivy).OrderByDescending(o => o.NewsId).Skip(1).Take(9).ToList();
            var item = db.News.Where(w => w.Status == (int?)CommonStatus.Acitivy).OrderByDescending(o => o.NewsId).FirstOrDefault();
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
