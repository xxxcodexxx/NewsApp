using System;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using NEWS.CORE.Models;
using NEWS.DATA.Interface;

namespace NEWS.DATA
{

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
