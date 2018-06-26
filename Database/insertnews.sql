USE cms
GO
INSERT INTO dbo.Categories
        ( CategoryName ,
          ParentId ,
          Status ,
          CategoryDisplayName
        )
VALUES  ( N'sukien' , -- CategoryName - nvarchar(max)
          0 , -- ParentId - int
          0 , -- Status - int
          N'SỰ KIỆN'  -- CategoryDisplayName - nvarchar(max)
        )
GO
INSERT INTO dbo.Categories
        ( CategoryName ,
          ParentId ,
          Status ,
          CategoryDisplayName
        )
VALUES  ( N'xahoi' , -- CategoryName - nvarchar(max)
          0 , -- ParentId - int
          0 , -- Status - int
          N'XÃ HỘI'  -- CategoryDisplayName - nvarchar(max)
        )
GO
INSERT INTO dbo.Categories
        ( CategoryName ,
          ParentId ,
          Status ,
          CategoryDisplayName
        )
VALUES  ( N'thegioi' , -- CategoryName - nvarchar(max)
          0 , -- ParentId - int
          0 , -- Status - int
          N'THẾ GIỚI'  -- CategoryDisplayName - nvarchar(max)
        )
GO
INSERT INTO dbo.Categories
        ( CategoryName ,
          ParentId ,
          Status ,
          CategoryDisplayName
        )
VALUES  ( N'giaoduc' , -- CategoryName - nvarchar(max)
          0 , -- ParentId - int
          0 , -- Status - int
          N'GIÁO DỤC'  -- CategoryDisplayName - nvarchar(max)
        )
GO
INSERT INTO dbo.Categories
        ( CategoryName ,
          ParentId ,
          Status ,
          CategoryDisplayName
        )
VALUES  ( N'giaitri' , -- CategoryName - nvarchar(max)
          0 , -- ParentId - int
          0 , -- Status - int
          N'GIẢI TRÍ'  -- CategoryDisplayName - nvarchar(max)
        )
GO
INSERT INTO dbo.Categories
        ( CategoryName ,
          ParentId ,
          Status ,
          CategoryDisplayName
        )
VALUES  ( N'nhipsongtre' , -- CategoryName - nvarchar(max)
          0 , -- ParentId - int
          0 , -- Status - int
          N'NHỊP SỐNG TRẺ'  -- CategoryDisplayName - nvarchar(max)
        )
GO
USE cms
GO

DECLARE @intFlag INT
DECLARE @categoryid INT
SET @categoryid = (SELECT dbo.Categories.CategoryId FROM dbo.Categories WHERE dbo.Categories.CategoryName = N'sukien')
SET @intFlag = 1
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
    VALUES  ( N'fasdfasdfasdfasdfasdf' , -- Title - nvarchar(max)
              N'fadsfasdfasdfasd' , -- Description - nvarchar(max)
              N'fadsfasdfasdfasdfsa' , -- Content - nvarchar(max)
              N'/SaveImages/1.jpg' , -- Image - nvarchar(max)
              @categoryid , -- CategoryId - int
              0 , -- Status - int
              GETDATE() , -- CreatedTime - datetime
              GETDATE() , -- ModifiedTime - datetime
              N'fadsfasdfasdfasdfsa' , -- CreateBy - nvarchar(max)
              N'' , -- ModifiedBy - nvarchar(max)
              N'fadsfasdfasdfasdfsa' , -- Author - nvarchar(max)
              0 , -- ViewCount - int
              N''  -- Tags - nvarchar(max)
            )
    SET @intFlag = @intFlag + 1
END
GO
DECLARE @intFlag INT
SET @intFlag = 1
DECLARE @categoryid INT
SET @categoryid = (SELECT dbo.Categories.CategoryId FROM dbo.Categories WHERE dbo.Categories.CategoryName = N'xahoi')

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
    VALUES  ( N'fasdfasdfasdfasdfasdf' , -- Title - nvarchar(max)
              N'fadsfasdfasdfasd' , -- Description - nvarchar(max)
              N'fadsfasdfasdfasdfsa' , -- Content - nvarchar(max)
              N'/SaveImages/1.jpg' , -- Image - nvarchar(max)
              @categoryid , -- CategoryId - int
              0 , -- Status - int
              GETDATE() , -- CreatedTime - datetime
              GETDATE() , -- ModifiedTime - datetime
              N'fadsfasdfasdfasdfsa' , -- CreateBy - nvarchar(max)
              N'' , -- ModifiedBy - nvarchar(max)
              N'fadsfasdfasdfasdfsa' , -- Author - nvarchar(max)
              0 , -- ViewCount - int
              N''  -- Tags - nvarchar(max)
            )
    SET @intFlag = @intFlag + 1
END
GO

DECLARE @intFlag INT
SET @intFlag = 1
DECLARE @categoryid INT
SET @categoryid = (SELECT dbo.Categories.CategoryId FROM dbo.Categories WHERE dbo.Categories.CategoryName = N'thegioi')

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
    VALUES  ( N'fasdfasdfasdfasdfasdf' , -- Title - nvarchar(max)
              N'fadsfasdfasdfasd' , -- Description - nvarchar(max)
              N'fadsfasdfasdfasdfsa' , -- Content - nvarchar(max)
              N'/SaveImages/1.jpg' , -- Image - nvarchar(max)
              @categoryid , -- CategoryId - int
              0 , -- Status - int
              GETDATE() , -- CreatedTime - datetime
              GETDATE() , -- ModifiedTime - datetime
              N'fadsfasdfasdfasdfsa' , -- CreateBy - nvarchar(max)
              N'' , -- ModifiedBy - nvarchar(max)
              N'fadsfasdfasdfasdfsa' , -- Author - nvarchar(max)
              0 , -- ViewCount - int
              N''  -- Tags - nvarchar(max)
            )
    SET @intFlag = @intFlag + 1
END
GO
DECLARE @intFlag INT
SET @intFlag = 1
DECLARE @categoryid INT
SET @categoryid = (SELECT dbo.Categories.CategoryId FROM dbo.Categories WHERE dbo.Categories.CategoryName = N'giaoduc')

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
    VALUES  ( N'fasdfasdfasdfasdfasdf' , -- Title - nvarchar(max)
              N'fadsfasdfasdfasd' , -- Description - nvarchar(max)
              N'fadsfasdfasdfasdfsa' , -- Content - nvarchar(max)
              N'/SaveImages/1.jpg' , -- Image - nvarchar(max)
              @categoryid , -- CategoryId - int
              0 , -- Status - int
              GETDATE() , -- CreatedTime - datetime
              GETDATE() , -- ModifiedTime - datetime
              N'fadsfasdfasdfasdfsa' , -- CreateBy - nvarchar(max)
              N'' , -- ModifiedBy - nvarchar(max)
              N'fadsfasdfasdfasdfsa' , -- Author - nvarchar(max)
              0 , -- ViewCount - int
              N''  -- Tags - nvarchar(max)
            )
    SET @intFlag = @intFlag + 1
END
GO
DECLARE @intFlag INT
SET @intFlag = 1
DECLARE @categoryid INT
SET @categoryid = (SELECT dbo.Categories.CategoryId FROM dbo.Categories WHERE dbo.Categories.CategoryName = N'giaitri')
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
    VALUES  ( N'fasdfasdfasdfasdfasdf' , -- Title - nvarchar(max)
              N'fadsfasdfasdfasd' , -- Description - nvarchar(max)
              N'fadsfasdfasdfasdfsa' , -- Content - nvarchar(max)
              N'/SaveImages/1.jpg' , -- Image - nvarchar(max)
              @categoryid , -- CategoryId - int
              0 , -- Status - int
              GETDATE() , -- CreatedTime - datetime
              GETDATE() , -- ModifiedTime - datetime
              N'fadsfasdfasdfasdfsa' , -- CreateBy - nvarchar(max)
              N'' , -- ModifiedBy - nvarchar(max)
              N'fadsfasdfasdfasdfsa' , -- Author - nvarchar(max)
              0 , -- ViewCount - int
              N''  -- Tags - nvarchar(max)
            )
    SET @intFlag = @intFlag + 1
END
GO
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
    VALUES  ( N'fasdfasdfasdfasdfasdf' , -- Title - nvarchar(max)
              N'fadsfasdfasdfasd' , -- Description - nvarchar(max)
              N'fadsfasdfasdfasdfsa' , -- Content - nvarchar(max)
              N'/SaveImages/1.jpg' , -- Image - nvarchar(max)
              @categoryid , -- CategoryId - int
              0 , -- Status - int
              GETDATE() , -- CreatedTime - datetime
              GETDATE() , -- ModifiedTime - datetime
              N'fadsfasdfasdfasdfsa' , -- CreateBy - nvarchar(max)
              N'' , -- ModifiedBy - nvarchar(max)
              N'fadsfasdfasdfasdfsa' , -- Author - nvarchar(max)
              0 , -- ViewCount - int
              N''  -- Tags - nvarchar(max)
            )
    SET @intFlag = @intFlag + 1
END
GO