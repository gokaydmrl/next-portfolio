CREATE TABLE "messages" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"message" text NOT NULL
);
--> statement-breakpoint
DROP TABLE "message" CASCADE;