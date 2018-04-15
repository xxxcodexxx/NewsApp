using System;

namespace NEWS.CORE.Models
{
    public partial class News
    {
        public int NewsId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Content { get; set; }
        public string Image { get; set; }
        public int? CategoryId { get; set; }
        public int? Status { get; set; }
        public DateTime? CreatedTime { get; set; }
        public DateTime? ModifiedTime { get; set; }
        public string CreateBy { get; set; }
        public string ModifiedBy { get; set; }
        public string Author { get; set; }
        public int? ViewCount { get; set; }
        public string Tags { get; set; }
    }
}
