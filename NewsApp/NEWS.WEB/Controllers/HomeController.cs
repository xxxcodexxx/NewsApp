using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NEWS.CORE.Models;
namespace NEWS.WEB.Controllers
{
    public class HomeController : Controller
    {
        NEWS.DATA.NewsDbContext db = new DATA.NewsDbContext();
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult List()
        {
            var news = db.News;
            return View(news.ToArray());
        }
        public ActionResult ListByCategory(int id)
        {
            var list = db.News.Where(w=>w.CategoryId == id);
            return View("List",list.ToList());
        }

        public ActionResult Detail(int id)
        {
            var item = db.News.FirstOrDefault(w => w.NewsId == id);
            ++item.ViewCount;
            db.SaveChanges();
            return View(item);
        }
        public ActionResult Search(string searchInput)
        {
            var item = db.News.Where(w => w.Description.Contains(searchInput) || w.Content.Contains(searchInput) || w.Title.Contains(searchInput) || w.Tags.Contains(searchInput));
            return View(item);
        }
    }
}
