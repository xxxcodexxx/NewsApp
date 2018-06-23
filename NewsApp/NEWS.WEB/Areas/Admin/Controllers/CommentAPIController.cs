using System.Net.Http;
using System.Linq;
using System.Web.Http;
using NEWS.WEB.Models;

namespace NEWS.WEB.Areas.Admin.Controllers
{
    public class CommentAPIController : BaseAPIController
    {
        DBContext context = new DBContext();

        [HttpGet]
        public HttpResponseMessage Get()
        {
            return ToJson(context.Comments.ToList());
        }

        [HttpPost]
        public HttpResponseMessage Post([FromBody]Models.Comment item)
        {
            return ToJson(context.Comments.Add(item));
        }

        [HttpPut]
        public HttpResponseMessage Update([FromBody]Models.Comment item)
        {
            var obj = context.Comments.Where(c => c.NewsId == item.NewsId).FirstOrDefault();
            return ToJson(context.SaveChanges());
        }

        [HttpDelete]
        public HttpResponseMessage Delete(int id)
        {
            var obj = context.Comments.Where(c => c.NewsId == id).FirstOrDefault();
            context.Comments.Remove(obj);
            return ToJson(context.SaveChanges());

        }
    }
}