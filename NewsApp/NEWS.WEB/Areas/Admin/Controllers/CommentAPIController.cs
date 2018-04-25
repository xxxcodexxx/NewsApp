using System.Net.Http;
using System.Linq;
using NEWS.CORE.Interface;
using NEWS.CORE.Models;
using NEWS.CORE.Services;
using NEWS.CORE.UnitOfWork;
using NEWS.DATA;
using NEWS.DATA.Interface;
using NEWS.DATA.UnitOfWork;
using NEWS.SERVICES.Business;
using System.Web.Http;
using System;

namespace NEWS.WEB.Areas.Admin.Controllers
{
    public class CommentAPIController : BaseAPIController
    {
        private readonly ICommentServices _commentServices;
        public CommentAPIController()
        {
            IDatabaseFactory databaseFactory = new DatabaseFactory();
            IRepository<Comment> repositoryComment = new Repository<Comment>(databaseFactory);
            IUnitOfWork unitOfWork = new UnitOfWork(databaseFactory);
            this._commentServices = new CommentServices(repositoryComment, unitOfWork);
        }

        [HttpGet]
        public HttpResponseMessage Get()
        {
            return ToJson(_commentServices.GetAll().ToList().Where(w=>w.Status == (int)Models.CommonStatus.Acitivy));
        }

        [HttpPost]
        public HttpResponseMessage Post([FromBody]Comment item)
        {
            item.Status = (int)Models.CommonStatus.Acitivy;
            item.PostedTime = DateTime.Now;
            return ToJson(_commentServices.Add(item));
        }

        [HttpPut]
        public HttpResponseMessage Update([FromBody]Comment item)
        {
            return ToJson(_commentServices.Update(item));
        }

        [HttpDelete]
        public HttpResponseMessage Delete(int id)
        {
            var item = _commentServices.GetById(id);
            item.Status = (int)Models.CommonStatus.Deleted;
            return ToJson(_commentServices.Update(item));
        }
        
    }
}