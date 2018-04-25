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
    public class FeedbackAPIController : BaseAPIController
    {
        private readonly IFeedbackServices _feedbackServices;
        public FeedbackAPIController()
        {
            IDatabaseFactory databaseFactory = new DatabaseFactory();
            IRepository<Feedback> repositoryFeedback = new Repository<Feedback>(databaseFactory);
            IUnitOfWork unitOfWork = new UnitOfWork(databaseFactory);
            this._feedbackServices = new FeedbackServices(repositoryFeedback, unitOfWork);
        }

        [HttpGet]
        public HttpResponseMessage Get()
        {
            return ToJson(_feedbackServices.GetAll().ToList().Where(w=>w.Status == (int)Models.CommonStatus.Acitivy));
        }

        [HttpPost]
        public HttpResponseMessage Post([FromBody]Feedback item)
        {
            item.Status = (int)Models.CommonStatus.Acitivy;
            item.SendedTime = DateTime.Now;
            return ToJson(_feedbackServices.Add(item));
        }

        [HttpPut]
        public HttpResponseMessage Update([FromBody]Feedback item)
        {
            return ToJson(_feedbackServices.Update(item));
        }

        [HttpDelete]
        public HttpResponseMessage Delete(int id)
        {
            var item = _feedbackServices.GetById(id);
            item.Status = (int)Models.CommonStatus.Deleted;
            return ToJson(_feedbackServices.Update(item));
        }
        
    }
}