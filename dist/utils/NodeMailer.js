// import * as nodeMailer from "nodemailer";
// import { getEnvironmentVariables } from "../enviroments/environment";
// export class NodeMailer {
//   private static initiateTransport() {
//     // Check if we should use Gmail or Brevo
//     const useGmail = process.env.USE_GMAIL === "true"; // You can set this environment variable or modify based on your needs
//     if (useGmail) {
//       // Gmail SMTP Transport
//       return nodeMailer.createTransport({
//         service: "gmail",
//         auth: {
//           user: getEnvironmentVariables()?.gmail_auth?.user || "", // Gmail username
//           pass: getEnvironmentVariables()?.gmail_auth?.pass || "", // Gmail password
//         },
//       });
//     } else {
//       // Brevo SMTP Transport (default option)
//       return nodeMailer.createTransport({
//         },
//       });
//     }
//   }
//   static sendMail(data: {
//     to: string | string[]; // Support multiple recipients
//     subject: string;
//     html: string;
//   }): Promise<any> {
//     return NodeMailer.initiateTransport()
//       .sendMail({
//         // From email (use either Gmail or Brevo sender email depending on the chosen transport)
//         from: getEnvironmentVariables()?.brevo?.from_email || 
//               getEnvironmentVariables()?.gmail_auth?.user || 
//               "your-email@example.com",
//         to: data.to,
//         subject: data.subject,
//         html: data.html,
//       })
//       .then((response) => {
//         console.log("Email sent successfully:", response);
//         return response;
//       })
//       .catch((error) => {
//         console.error("Error sending email:", error);
//         throw error;
//       });
//   }
// }
