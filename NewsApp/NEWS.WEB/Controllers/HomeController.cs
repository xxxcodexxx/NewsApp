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
        public ActionResult List(int id)
        {
            var list = db.News.Where(w => w.CategoryId == id && w.Status == (int?)CommonStatus.Acitivy);
            return View(list.ToList());
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
        public ActionResult _TopViewPartial()
        {
            var news = db.News.Where(w => w.Status == (int?)CommonStatus.Acitivy).OrderByDescending(o => o.ViewCount).Take(3);
            return PartialView("_TopViewPartial", news.ToList());
        }
    }
}
