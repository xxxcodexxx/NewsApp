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
