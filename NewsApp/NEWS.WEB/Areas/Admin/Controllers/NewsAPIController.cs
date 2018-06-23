using System.Net.Http;
using System.Linq;
using System.Web.Http;
using System;
using NEWS.WEB.Models;

namespace NEWS.WEB.Areas.Admin.Controllers
{
    public class NewsAPIController : BaseAPIController
    {
        DBContext context = new DBContext();

        [HttpGet]
        public HttpResponseMessage Get()
        {
            return ToJson(context.News.ToList().Where(w=>w.Status == (int)Models.CommonStatus.Acitivy));
        }

        [HttpPost]
        public HttpResponseMessage Post([FromBody]Models.News item)
        {
            item.Status = (int)Models.CommonStatus.Acitivy;
            item.CreatedTime = DateTime.Now;
            item.ViewCount = 0;
            return ToJson(context.News.Add(item));
        }

        [HttpPut]
        public HttpResponseMessage Update([FromBody]Models.News item)
        {
            var obj = context.News.Where(c => c.NewsId == item.NewsId).FirstOrDefault();
            return ToJson(context.SaveChanges());
        }

        [HttpDelete]
        public HttpResponseMessage Delete(int id)
        {
            var obj = context.News.Where(c => c.NewsId == id).FirstOrDefault();
            context.News.Remove(obj);
            return ToJson(context.SaveChanges());
        }
        
    }
}