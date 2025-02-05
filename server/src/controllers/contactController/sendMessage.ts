import { Request, Response } from "express";
import Contact, { IContact } from "../../models/contact/contact";

export const sendMessage = async (
   req: Request,
   res: Response
): Promise<void> => {
   const { fullName, email, country, role, comments } = req.body;

   if (!fullName || !email || !country || !role || !comments) {
      res.status(400).json({ message: "All fields are required." });
      return;
   }

   try {
      const createMessage: IContact = new Contact({
         fullName,
         email,
         country,
         role,
         comments,
      });

      const savedMessage = await createMessage.save();
      res.status(201).json({
         message: "Message send successfully",
         savedMessage,
      });
   } catch (error) {
      res.status(500).json({ message: "Not able to send message", error });
   }
};
