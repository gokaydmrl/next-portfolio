ALTER TABLE "message" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "message" ADD CONSTRAINT "message_id_unique" UNIQUE("id");