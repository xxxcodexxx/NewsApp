using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http;


namespace NEWS.WEB.Areas.Admin.Controllers
{
    public class UploadFileApiController : ApiController
    {
        // GET: Admin/UploadFileApi

        [System.Web.Http.HttpPost]
        public HttpResponseMessage UploadJsonFile()
        {
            HttpResponseMessage response = new HttpResponseMessage();
            var httpRequest = HttpContext.Current.Request;
            if (httpRequest.Files.Count > 0)
            {
                foreach (string file in httpRequest.Files)
                {
                    var postedFile = httpRequest.Files[file];
                    var filePath = HttpContext.Current.Server.MapPath("~/SaveImages/" + postedFile.FileName);
                    postedFile.SaveAs(filePath);
                }
            }
            return response;
        }
    }
}