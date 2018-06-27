using System.Net.Http;
using System.Linq;
using System.Web.Http;
using NEWS.WEB.Models;
using System;

namespace NEWS.WEB.Areas.Admin.Controllers
{
    public class CommentAPIController : BaseAPIController
    {
        DBContext db = new DBContext();

        [HttpGet]
        public HttpResponseMessage Get()
        {
            return ToJson(db.Comments.Where(w=>w.Status == (int?)CommonStatus.Acitivy).ToList());
        }

        [HttpPost]
        public HttpResponseMessage Post([FromBody]Models.Comment item)
        {
            item.Status = (int?)CommonStatus.Acitivy;
            item.PostedTime = DateTime.Now;
            db.Comments.Add(item);
            return ToJson(db.SaveChanges());
        }

        [HttpPut]
        public HttpResponseMessage Update([FromBody]Models.Comment item)
        {
            var obj = db.Comments.FirstOrDefault(c => c.NewsId == item.NewsId);
            obj.Content = item.Content;
            obj.NewsId = item.NewsId;
            obj.ParentId = item.ParentId;
            obj.PostedTime = DateTime.Now;
            return ToJson(db.SaveChanges());
        }

        [HttpDelete]
        public HttpResponseMessage Delete(int id)
        {
            var obj = db.Comments.FirstOrDefault(c => c.NewsId == id);
            obj.Status = (int?)CommonStatus.Deleted;
            return ToJson(db.SaveChanges());

        }
    }
}