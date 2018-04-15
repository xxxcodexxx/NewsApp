namespace NEWS.DATA
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;
    using NEWS.DATA.Interface;
    using System.Data.Entity.Infrastructure;
    using NEWS.CORE.Models;

    public partial class NewsDbContext : DbContext, IDataContext
    {
        public NewsDbContext()
            : base("name=NewsDbContext")
        {
        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }

        public DbSet<Category> categories { get; set; }

        public IDbSet<T> DbSet<T>() where T : class
        {
            return this.Set<T>();
        }

        public DbEntityEntry<T> EntryGet<T>(T entity) where T : class
        {
            return this.Entry<T>(entity);
        }

        public virtual int Commit()
        {
            try
            {
                return this.SaveChanges();
            }
            catch (Exception ex)
            {

                throw ex;
            }

        }
    }
}
