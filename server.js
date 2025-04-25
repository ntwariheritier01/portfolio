import express from 'express'
import { connectDB } from './config/db.js'
import authRoutes from './routes/auth.route.js'
import blogRoutes from './routes/blog.route.js'
import userRoutes from './routes/users.route.js'
import categoryRoutes from './routes/category.route.js'
import { config } from 'dotenv'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './swagger.js'


config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/posts', blogRoutes);
app.use('/api/users', userRoutes)
app.use('/api', categoryRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


export default app