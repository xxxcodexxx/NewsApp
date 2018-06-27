using System.Net.Http;
using System.Linq;
using System.Web.Http;
using NEWS.WEB.Models;

namespace NEWS.WEB.Areas.Admin.Controllers
{
    public class CommentAPIController : BaseAPIController
    {
        DBContext db = new DBContext();

        [HttpGet]
        public HttpResponseMessage Get()
        {
            return ToJson(db.Comments.ToList());
        }

        [HttpPost]
        public HttpResponseMessage Post([FromBody]Models.Comment item)
        {
            item.Status = (int?)CommonStatus.Acitivy;
            db.Comments.Add(item);
            return ToJson(db.SaveChanges());
        }

        [HttpPut]
        public HttpResponseMessage Update([FromBody]Models.Comment item)
        {
            var obj = db.Comments.FirstOrDefault(c => c.NewsId == item.NewsId);
            obj = item;
            return ToJson(db.SaveChanges());
        }

        [HttpDelete]
        public HttpResponseMessage Delete(int id)
        {
            var obj = db.Comments.Where(c => c.NewsId == id).FirstOrDefault();
            db.Comments.Remove(obj);
            return ToJson(db.SaveChanges());

        }
    }
}