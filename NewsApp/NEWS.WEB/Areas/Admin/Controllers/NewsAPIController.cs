using System.Net.Http;
using System.Linq;
using System.Web.Http;
using System;
using NEWS.WEB.Models;

namespace NEWS.WEB.Areas.Admin.Controllers
{
    public class NewsAPIController : BaseAPIController
    {
        DBContext db = new DBContext();

        [HttpGet]
        public HttpResponseMessage Get()
        {
            return ToJson(db.News.ToList().Where(w => w.Status == (int)Models.CommonStatus.Acitivy));
        }

        [HttpPost]
        public HttpResponseMessage Post([FromBody]Models.News item)
        {
            item.Status = (int)Models.CommonStatus.Acitivy;
            item.CreatedTime = DateTime.Now;
            item.ViewCount = 0;
            db.News.Add(item);
            return ToJson(db.SaveChanges());
        }

        [HttpPut]
        public HttpResponseMessage Update([FromBody]Models.News item)
        {
            var obj = db.News.FirstOrDefault(c => c.NewsId == item.NewsId);
            obj.Author = item.Author;
            obj.Content = item.Content;
            obj.Description = item.Description;
            obj.Image = item.Image;
            obj.ModifiedTime = DateTime.Now;
            obj.CategoryId = item.CategoryId;
            obj.Tags = item.Tags;
            obj.Title = item.Title;
            return ToJson(db.SaveChanges());
        }

        [HttpDelete]
        public HttpResponseMessage Delete(int id)
        {
            var obj = db.News.FirstOrDefault(c => c.NewsId == id);
            obj.Status = (int)CommonStatus.Deleted;
            return ToJson(db.SaveChanges());
        }

    }
}