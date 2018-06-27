namespace NEWS.WEB.Migrations
{
    using NEWS.WEB.Models;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity.Migrations;
    
    public partial class DefaultData : DbMigration
    {
        DBContext db = new DBContext();
        public override void Up()
        {
            this.addRole();
            this.addUser();
        }
        
        public override void Down()
        {
        }

        private void addRole()
        {
            List<Role> lsRole = new List<Role>();
            lsRole.Add(new Role((int)CommonRoles.quantri, "Quản trị", (int)CommonStatus.Acitivy));
            lsRole.Add(new Role((int)CommonRoles.pheduyet, "Phê duyệt", (int)CommonStatus.Acitivy));
            lsRole.Add(new Role((int)CommonRoles.nguoidung, "Người dùng", (int)CommonStatus.Acitivy));
            db.Roles.AddRange(lsRole);
            db.SaveChanges();
        }

        private void addUser()
        {
            User us = new User();
            us.UserName = "admin";
            us.Password = Encryption.Encrypt("admin@123");
            us.RoleId = (int)CommonRoles.quantri;
            us.Status = (int)CommonStatus.Acitivy;
            us.FullName = "Quản trị viên";
            db.Users.Add(us);
            db.SaveChanges();
        }
    }
}
