import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import dalleRoutes from './routes/dalleRoutes.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1/dalle', dalleRoutes)

app.get('/', (req, res) => res.status(200).json({ message: "Hello from DALL.E" }))

app.listen(8080, () => console.log(`Server started on port 8080`))