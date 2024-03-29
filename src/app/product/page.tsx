import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Product() {
    return (
        <Box sx={{ m: '22px' }}>
            <Typography variant="h5">product page....</Typography>
            <Box className="flex flex-col space-y-4 m-7">
                <Link className="text-lg text-blue-600 underline transition hover:text-orange-500" href="/product/1">- To product 1</Link>
                <Link className="text-lg text-blue-600 underline transition hover:text-orange-500" href="/product/2">- To product 2</Link>
                <Link className="text-lg text-blue-600 underline transition hover:text-orange-500" href="/product/3">- To product 3</Link>
                <Link className="text-lg text-blue-600 underline transition hover:text-orange-500" href="/product/4">- To product 4</Link>
                <Link className="text-lg text-blue-600 underline transition hover:text-orange-500" href="/product/5">- To product 5</Link>
                <Link className="text-lg text-blue-600 underline transition hover:text-orange-500" href="/product/6">- To product 6</Link>
            </Box>
            <Typography>even you can enter product 1202 (/product/1234) in URL.</Typography>
        </Box>
    )
}