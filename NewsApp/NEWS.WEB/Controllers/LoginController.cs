﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NEWS.WEB.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }

        public PartialViewResult _Login()
        {
            string[] arr = new string[] {"h", "g", "t" };
            return PartialView("_Login", arr);
        }
    }
}