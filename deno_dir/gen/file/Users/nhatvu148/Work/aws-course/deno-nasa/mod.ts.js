import { Application } from "https://deno.land/x/oak/mod.ts";
const app = new Application();
const PORT = 8000;
app.use((ctx) => {
    ctx.response.body = `
  {___     {__      {_         {__ __        {_       
  {_ {__   {__     {_ __     {__    {__     {_ __     
  {__ {__  {__    {_  {__     {__          {_  {__    
  {__  {__ {__   {__   {__      {__       {__   {__   
  {__   {_ {__  {______ {__        {__   {______ {__  
  {__    {_ __ {__       {__ {__    {__ {__       {__ 
  {__      {__{__         {__  {__ __  {__         {__
                  Mission Control API`;
});
if (import.meta.main) {
    await app.listen({
        port: PORT,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU3RCxNQUFNLEdBQUcsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO0FBRTlCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztBQUVsQixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7SUFDZCxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRzs7Ozs7Ozs7c0NBUWdCLENBQUM7QUFDdkMsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO0lBQ3BCLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUNmLElBQUksRUFBRSxJQUFJO0tBQ1gsQ0FBQyxDQUFDO0NBQ0oifQ==