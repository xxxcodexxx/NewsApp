CREATE DATABASE CMSLight
GO
USE CMSLight 
GO
CREATE TABLE News(
	NewsId INT IDENTITY PRIMARY KEY NOT NULL,
	Title NVARCHAR(50),
	Description NVARCHAR(MAX),
	Content NVARCHAR(MAX),
	Image NVARCHAR(100),
	CategoryId INT,
	Status INT DEFAULT(0),
	CreatedTime DATETIME,
	ModifiedTime DATETIME,
	CreateBy NVARCHAR(30),
	ModifiedBy NVARCHAR(30),
	Author NVARCHAR(30),
	ViewCount INT,
	Tags NVARCHAR(100)
)
GO
CREATE TABLE Category(
	CategoryId INT IDENTITY PRIMARY KEY NOT NULL,
	CategoryName NVARCHAR(30),
	ParentId INT DEFAULT(0),
	Status INT DEFAULT(0)
)
GO
CREATE TABLE Permission(
	PermissionId INT IDENTITY PRIMARY KEY NOT NULL,
	PermissionName NVARCHAR(20),
	Status INT DEFAULT(0)
)
GO

CREATE TABLE Account(
	UserName NVARCHAR(30) PRIMARY KEY NOT NULL,
	Password NVARCHAR(30),
	FullName NVARCHAR(30),
	Email NVARCHAR(50),
	Phone NVARCHAR(15),
	PermissionId INT,
	Status INT DEFAULT(0)
)
CREATE TABLE Comment(
	CommentId INT IDENTITY PRIMARY KEY NOT NULL,
	Content NVARCHAR(MAX),
	Poster NVARCHAR(30),
	PostedTime DATETIME,
	ParentId INT DEFAULT(0),
	Status INT DEFAULT(0)
)

CREATE TABLE Feedback(
	FeedbackId INT IDENTITY NOT NULL PRIMARY KEY,
	Content NVARCHAR(MAX),
	FullName NVARCHAR(30),
	Email NVARCHAR(50),
	SendedTime DATETIME,
	Status INT DEFAULT(0)
)