using System;

namespace NEWS.CORE.Models
{
    
    public partial class Feedback
    {
        public int FeedbackId { get; set; }
        public string Content { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public DateTime? SendedTime { get; set; }
        public int? Status { get; set; }
    }
}
