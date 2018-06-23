using System.Net.Http;
using System.Linq;
using System.Web.Http;
using NEWS.WEB.Models;

namespace NEWS.WEB.Areas.Admin.Controllers
{
    public class AccountAPIController : BaseAPIController
    {
        DBContext context = new DBContext();

        [HttpGet]
        public HttpResponseMessage Get()
        {
            return ToJson(context.Users.ToList());
        }

        [HttpPost]
        public HttpResponseMessage Post([FromBody]User item)
        {
            return ToJson(context.Users.Add(item));
        }

        [HttpPut]
        public HttpResponseMessage Update([FromBody]User item)
        {
            var obj = context.Users.Where(u => u.ID == item.ID);
            return ToJson(context.SaveChanges());
        }

        [HttpDelete]
        public HttpResponseMessage Delete(User item)
        {
            context.Users.Remove(item);
            return ToJson(context.SaveChanges());
        }

    }
}