﻿using System.Net.Http;
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


namespace NEWS.WEB.Areas.Admin.Controllers
{
    public class CategoryAPIController : BaseAPIController
    {
        private readonly ICategoryServices _categoryServices;
        public CategoryAPIController()
        {
            IDatabaseFactory databaseFactory = new DatabaseFactory();
            IRepository<Category> repositoryCategory = new Repository<Category>(databaseFactory);
            IUnitOfWork unitOfWork = new UnitOfWork(databaseFactory);
            this._categoryServices = new CategoryServices(repositoryCategory, unitOfWork);
        }

        [HttpGet]
        public HttpResponseMessage Get()
        {
            return ToJson(_categoryServices.GetAll().ToList());
        }

        [HttpPost]
        public HttpResponseMessage Post([FromBody]Category item)
        {
            return ToJson(_categoryServices.Add(item));
        }

        [HttpPut]
        public HttpResponseMessage Update([FromBody]Category item)
        {
            return ToJson(_categoryServices.Update(item));
        }

        [HttpDelete]
        public HttpResponseMessage Delete(int id)
        {
            return ToJson(_categoryServices.Delete(_categoryServices.GetById(id)));
        }
        
    }
}