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
    public class NewsAPIController : BaseAPIController
    {
        private readonly INewsServices _newsServices;
        public NewsAPIController()
        {
            IDatabaseFactory databaseFactory = new DatabaseFactory();
            IRepository<News> repositorynews = new Repository<News>(databaseFactory);
            IUnitOfWork unitOfWork = new UnitOfWork(databaseFactory);
            this._newsServices = new NewsServices(repositorynews, unitOfWork);
        }

        [HttpGet]
        public HttpResponseMessage Get()
        {
            return ToJson(_newsServices.GetAll().ToList().Where(w=>w.Status == 0));
        }

        [HttpPost]
        public HttpResponseMessage Post([FromBody]News item)
        {
            item.Status = (int)Models.CommonStatus.Acitivy;
            item.CreatedTime = DateTime.Now;
            item.ViewCount = 0;
            return ToJson(_newsServices.Add(item));
        }

        [HttpPut]
        public HttpResponseMessage Update([FromBody]News item)
        {
            item.ModifiedTime = DateTime.Now;
            return ToJson(_newsServices.Update(item));
        }

        [HttpDelete]
        public HttpResponseMessage Delete(int id)
        {
            var item = _newsServices.GetById(id);
            item.Status = (int)Models.CommonStatus.Deleted;
            return ToJson(_newsServices.Update(item));
        }
        
    }
}