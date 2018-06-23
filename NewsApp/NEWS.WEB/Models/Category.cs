namespace NEWS.WEB.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;

    public partial class Category
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Category()
        {
            this.News = new HashSet<News>();
        }
    
        public int CategoryId { get; set; }

        public string CategoryName { get; set; }

        [DefaultValue(0)]
        public Nullable<int> ParentId { get; set; }

        public Nullable<int> Status { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<News> News { get; set; }
    }
}
