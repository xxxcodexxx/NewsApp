namespace NEWS.WEB.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Comment
    {
        public int CommentId { get; set; }
        public string Content { get; set; }
        public Nullable<System.DateTime> PostedTime { get; set; }
        public Nullable<int> ParentId { get; set; }
        public Nullable<int> Status { get; set; }
        public int UserID { get; set; }
        public int NewsId { get; set; }
    }
}
