using System.Net.Http;
using System.Linq;
using System.Web.Http;
using System;
using NEWS.WEB.Models;

namespace NEWS.WEB.Areas.Admin.Controllers
{
    public class FeedbackAPIController : BaseAPIController
    {

        DBContext db = new DBContext();

        [HttpGet]
        public HttpResponseMessage Get()
        {
            return ToJson(db.Feedbacks.ToList().Where(w=>w.Status == (int)Models.CommonStatus.Acitivy));
        }

        [HttpPost]
        public HttpResponseMessage Post([FromBody]Models.Feedback item)
        {
            item.Status = (int)Models.CommonStatus.Acitivy;
            item.SendedTime = DateTime.Now;
            db.Feedbacks.Add(item);
            return ToJson(db.SaveChanges());
        }

        [HttpPut]
        public HttpResponseMessage Update([FromBody]Models.Feedback item)
        {
            var obj = db.Feedbacks.FirstOrDefault(c => c.FeedbackId == item.FeedbackId);
            obj.Content = item.Content;
            obj.Email = item.Email;
            obj.FullName = item.FullName;
            obj.SendedTime = item.SendedTime;
            return ToJson(db.SaveChanges());
        }

        [HttpDelete]
        public HttpResponseMessage Delete(int id)
        {
            var obj = db.Feedbacks.FirstOrDefault(c => c.FeedbackId == id);
            obj.Status = (int?)CommonStatus.Deleted;
            return ToJson(db.SaveChanges());
        }
        
    }
}