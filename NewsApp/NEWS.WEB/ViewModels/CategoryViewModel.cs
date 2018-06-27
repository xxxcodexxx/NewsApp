using NEWS.WEB.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NEWS.WEB.ViewModels
{
    public class CategoryViewModel
    {
        public int CategoryId { get; set; }

        public string CategoryName { get; set; }

        public Nullable<int> ParentId { get; set; }

        public Nullable<int> Status { get; set; }

        public string CategoryDisplayName { get; set; }

        public int OrderBy { get; set; }

        public List<Category> ChildCategory { get; set; }

        public List<Category> getChildCategory()
        {
            DBContext db = new DBContext();
            var obj = db.Categories.Where(c => c.ParentId == this.CategoryId).ToList();
            if (obj != null)
            {
                return db.Categories.Where(c => c.ParentId == this.CategoryId).ToList();
            }
            return null;
        }

        public CategoryViewModel(int categoryId, string categoryName, int? parentId, int? status, string categoryDisplayName, int orderBy)
        {
            CategoryId = categoryId;
            CategoryName = categoryName;
            ParentId = parentId;
            Status = status;
            CategoryDisplayName = categoryDisplayName;
            OrderBy = orderBy;
            ChildCategory = this.getChildCategory();
        }
        
    }
}