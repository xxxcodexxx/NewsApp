using System;

namespace NEWS.CORE.Models
{
    public partial class Comment
    {
        public int CommentId { get; set; }
        public string Content { get; set; }
        public string Poster { get; set; }
        public DateTime? PostedTime { get; set; }
        public int? ParentId { get; set; }
        public int? Status { get; set; }
    }
}
