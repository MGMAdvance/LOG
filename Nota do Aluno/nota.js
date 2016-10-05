var n1 = 0 , n2 = 9;
var nr = 8;

var media = (n1+n2)/2;
var nova_media = nr;
	if ( media >= 7 ) 
		{
		document.write("Aluno Aprovado = "+ media);
		}
			else if(media < 7)
				{
				document.write("Aluno em Recuperação = " + media, "<br>");
				}
				
					if (nova_media >= 7)
						{
						document.write("Aluno Aprovado = " + nova_media);
						}
							else if(nova_media < 7)
								{
								document.write("Aluno Reprovado = " + nova_media);
								}