const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3001;

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.db = router.db;

const rules = auth.rewriter({
  users: 600,
  production: 644,
  comments: 644,
  score: 644,
  profiles: 644,
  "/profiles/:type": "/profiles?type=:type",
  "/production/:id/stats": "/production/:id?_embed=comments&_embed=score",
});

// /664/	User must be logged to write the resource.
// Everyone can read the resource.
// /660/	User must be logged to write or read the resource.
// /644/	User must own the resource to write the resource.
// Everyone can read the resource.
// /640/	User must own the resource to write the resource.
// User must be logged to read the resource.
// /600/	User must own the resource to write or read the resource.
// /444/	No one can write the resource.
// Everyone can read the resource.
// /440/	No one can write the resource.
// User must be logged to read the resource.
// /400/	No one can write the resource.
// User must own the resource to read the resource.

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);

/* A senha do Kenzinho é 123456 */
