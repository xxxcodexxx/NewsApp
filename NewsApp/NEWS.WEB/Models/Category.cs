namespace NEWS.WEB.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;

    public partial class Category
    {
        public int CategoryId { get; set; }

        public string CategoryName { get; set; }

        [DefaultValue(0)]
        public Nullable<int> ParentId { get; set; }

        public Nullable<int> Status { get; set; }

        public string CategoryDisplayName { get; set; }
    }
}
