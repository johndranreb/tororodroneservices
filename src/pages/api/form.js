export default function handler(req, res) {
  const body = req.body;

  if(!body.name || !body.email || !body.message){
    return res.status(400).json({data: "Alert: Name, Email, and Message field are required!"});
  }
  return res.status(200).json({data: "Form submitted successfully"});
}
