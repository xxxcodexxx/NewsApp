using System.Net.Http;
using System.Linq;
using System.Web.Http;
using System;
using NEWS.WEB.Models;

namespace NEWS.WEB.Areas.Admin.Controllers
{
    public class FeedbackAPIController : BaseAPIController
    {

        DBContext context = new DBContext();

        [HttpGet]
        public HttpResponseMessage Get()
        {
            return ToJson(context.Feedbacks.ToList().Where(w=>w.Status == (int)Models.CommonStatus.Acitivy));
        }

        [HttpPost]
        public HttpResponseMessage Post([FromBody]Models.Feedback item)
        {
            item.Status = (int)Models.CommonStatus.Acitivy;
            item.SendedTime = DateTime.Now;
            return ToJson(context.Feedbacks.Add(item));
        }

        [HttpPut]
        public HttpResponseMessage Update([FromBody]Models.Feedback item)
        {
            var obj = context.Feedbacks.Where(c => c.FeedbackId == item.FeedbackId).FirstOrDefault();
            return ToJson(context.SaveChanges());
        }

        [HttpDelete]
        public HttpResponseMessage Delete(int id)
        {
            var obj = context.Feedbacks.Where(c => c.FeedbackId == id).FirstOrDefault();
            context.Feedbacks.Remove(obj);
            return ToJson(context.SaveChanges());
        }
        
    }
}