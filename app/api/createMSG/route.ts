import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

async function postMSG(req: Request, res: Response) {
  const { name, email } = await req.json();
  const findMail = await sql`select * from usersport where Email = ${email}`;
  if (findMail.rows[0]) {
    return NextResponse.json(
      {
        message: "קיים משתמש עם האימייל הזה! נסה שוב!",
      },
      {
        status: 400,
      }
    );
  } else {
    const user = await sql`
    INSERT INTO usersport (Name, Email, Timestamp)
    VALUES (${name}, ${email}, NOW())
  `;

    return NextResponse.json(
      { message: "תודה רבה על ההודעה שלך! אני אשתדל לחזור אליך בהקדם!" },
      {
        status: 200,
      }
    );
  }
}

export { postMSG as POST };
