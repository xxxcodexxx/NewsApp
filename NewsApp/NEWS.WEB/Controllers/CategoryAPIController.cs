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

namespace NEWS.WEB.Controllers
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

        public HttpResponseMessage Get()
        {
            return ToJson(_categoryServices.GetAll().ToList());
        }

        public HttpResponseMessage Post([FromBody]Category category)
        {
            return ToJson(_categoryServices.Add(category));
        }

        public HttpResponseMessage Put([FromBody]Category category)
        {
            return ToJson(_categoryServices.Add(category));
        }

        public HttpResponseMessage Delete(int id)
        {
            var cate = _categoryServices.GetById(id);
            return ToJson(_categoryServices.Delete(cate));
        }
    }
}