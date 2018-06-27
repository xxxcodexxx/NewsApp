namespace NEWS.WEB.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Addfield : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Categories", "CategoryDisplayName", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Categories", "CategoryDisplayName");
        }
    }
}
