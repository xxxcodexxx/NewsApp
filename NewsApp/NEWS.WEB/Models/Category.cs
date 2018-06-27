namespace NEWS.WEB.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.ComponentModel.DataAnnotations;
    using System.Linq;

    public partial class Category
    {
        [Key]
        public int CategoryId { get; set; }

        public string CategoryName { get; set; }

        [DefaultValue(0)]
        public Nullable<int> ParentId { get; set; }

        public Nullable<int> Status { get; set; }

        public string CategoryDisplayName { get; set; }

        public int OrderBy { get; set; }
    }
}
