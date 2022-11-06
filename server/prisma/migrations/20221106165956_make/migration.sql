-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "githubId" TEXT NOT NULL,
    "githubUsername" TEXT NOT NULL,
    "profilePicture" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_User" ("createdAt", "email", "githubId", "githubUsername", "id", "name", "profilePicture") SELECT "createdAt", "email", "githubId", "githubUsername", "id", "name", "profilePicture" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_githubId_key" ON "User"("githubId");
CREATE UNIQUE INDEX "User_githubUsername_key" ON "User"("githubUsername");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
