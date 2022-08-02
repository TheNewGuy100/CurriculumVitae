import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest, res: NextResponse): Promise<any> {
    const loginUser = await fetch(`http:localhost:3000/app-admin/api/login.service`)

    if (req.page?.name) {
        console.log("got logged")
    }
}