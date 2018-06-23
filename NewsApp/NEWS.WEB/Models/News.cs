namespace NEWS.WEB.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class News
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public News()
        {
            this.Comments = new HashSet<Comment>();
        }
    
        public int NewsId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Content { get; set; }
        public string Image { get; set; }
        public Nullable<int> Status { get; set; }
        public Nullable<System.DateTime> CreatedTime { get; set; }
        public Nullable<System.DateTime> ModifiedTime { get; set; }
        public string CreateBy { get; set; }
        public string ModifiedBy { get; set; }
        public string Author { get; set; }
        public Nullable<int> ViewCount { get; set; }
        public string Tags { get; set; }
        public int CategoryId { get; set; }
    
        public virtual Category Category { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Comment> Comments { get; set; }
    }
}
