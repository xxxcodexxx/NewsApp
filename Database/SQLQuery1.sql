USE cms
GO
ALTER TABLE dbo.Comments ADD
NewsId INT
GO
ALTER TABLE dbo.Categories ADD 
CategoryDisplayName NVARCHAR(MAX)