DECLARE @intFlag INT
SET @intFlag = 1
DECLARE @categoryid INT
SET @categoryid = (SELECT dbo.Categories.CategoryId FROM dbo.Categories WHERE dbo.Categories.CategoryName = N'nhipsongtre')
WHILE (@intFlag <=20)
BEGIN
    INSERT INTO dbo.News
            ( Title ,
              Description ,
              Content ,
              Image ,
              CategoryId ,
              Status ,
              CreatedTime ,
              ModifiedTime ,
              CreateBy ,
              ModifiedBy ,
              Author ,
              ViewCount ,
              Tags
            )
    VALUES  ( N'Brazil giành vé vào vòng 16 đội sau 'cuộc dạo chơi' ở Moscow' , -- Title - nvarchar(max)
              N'Neymar cùng đồng đội không mất nhiều sức lực để đánh bại Serbia 2-0 ở lượt trận cuối vòng bảng, qua đó hiên ngang tiến vào vòng 16 đội mạnh nhất World Cup 2018.' , -- Description - nvarchar(max)
              N'Ban đầu, pha lập công của Kim không được công nhận nhưng sau khi tham khảo VAR, trọng tài người Mỹ Mark Geiger đã chỉ tay vào chấm giao bóng, đồng nghĩa với việc đó là một bàn thắng hợp lệ của Hàn Quốc.  Pha bóng này đã chứng tỏ VAR không chỉ dành cho những đội bóng lớn tại World Cup 2018.Hàn Quốc đã có một trận đấu kiên cường và không chịu khuất phục trước mọi nỗ lực tấn công của đại diện đến từ châu Âu. ' , -- Content - nvarchar(max)
              N'/SaveImages/1.jpg' , -- Image - nvarchar(max)
              @categoryid , -- CategoryId - int
              0 , -- Status - int
              GETDATE() , -- CreatedTime - datetime
              GETDATE() , -- ModifiedTime - datetime
              N'Tran Van Nam' , -- CreateBy - nvarchar(max)
              N'' , -- ModifiedBy - nvarchar(max)
              N'Tran Van Duong' , -- Author - nvarchar(max)
              0 , -- ViewCount - int
              N''  -- Tags - nvarchar(max)
            )
    SET @intFlag = @intFlag + 1
END