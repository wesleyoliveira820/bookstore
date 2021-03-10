export default {
  origin: true,
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  exposeHeaders: false,
  credentials: false,
  optionsSuccessStatus: 200,
  maxAge: 90,
};
