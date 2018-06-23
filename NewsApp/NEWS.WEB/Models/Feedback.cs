namespace NEWS.WEB.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Feedback
    {
        public int FeedbackId { get; set; }
        public string Content { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public Nullable<System.DateTime> SendedTime { get; set; }
        public Nullable<int> Status { get; set; }
    }
}
