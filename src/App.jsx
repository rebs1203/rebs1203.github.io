import { Box } from '@mui/material'
import './App.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import { styled } from '@mui/material/styles';


function createData(nome, content, color) {
  return { nome, content, color };
}

const rows = [
  createData(
    "OFICIAL",
    "Fonte institucional ou legal (STF, Planalto, Senado, Banco Central).",
    "#d4edda"
  ),
  createData(
    "LEVANTAMENTO",
    "Base consolidada por monitoramento/metodologia declarada.",
    "#fff3cd"
  ),
  createData(
    "IMPRENSA",
    "Reportagem útil para fatos noticiosos, especialmente no caso Banco Master.",
    "#cce5ff"
  ),
];

function App() {

  return (
    <>
      <div className='header'>
        <div className='header-content'>
          <h1>A verdade também é democracia.</h1>
          <h2>Não deixe a desinformação decidir o futuro do Brasil.</h2>
        </div>
      </div>
      <Box component="section" className="info-section">
      Este documento organiza as referências usadas para sustentar os trechos do seu panfleto. Cada bloco traz o título/manchete da fonte, o tipo de fonte, uma explicação curta do que ela comprova e o link clicável. Também foram marcados os pontos que pedem mais cuidado de redação, para evitar afirmações além do que as fontes realmente demonstram.
      </Box>
      <div>
        <h2 className='table-title'>Legenda rápida</h2>
      </div>
      <div>
      <Table sx={{ maxWidth: 700, display: 'flex' , justifyContent: 'center' , margin: '0 auto' }} aria-label="customized table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.nome}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ backgroundColor: row.color }}>
                {row.nome}
              </TableCell>
              <TableCell align="right" sx={{ backgroundColor: row.color }}>{row.content}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
      <div className='content'>
          <h2 className='title-one'>1) Lula, STF e o caso do tríplex</h2>
          <div className='block1-section1'>
              <h3>OFICIAL</h3>
              <h3>Plenário do STF confirma decisão que anulou condenações de Lula na Justiça Federal do Paraná</h3>
              <p><b>Fonte:</b> Supremo Tribunal Federal (STF)</p>
              <p><b>O que sustenta no panfleto:</b> Sustenta a frase de que as condenações da Lava Jato foram anuladas porque a Vara Federal de Curitiba foi considerada incompetente para julgar os casos.</p>
              <a href="https://noticias.stf.jus.br/postsnoticias/plenario-do-stf-confirma-decisao-que-anulou-condenacoes-de-lula-na-justica-federal-do-parana/" target="_blank" rel="noopener noreferrer">Link para a fonte</a>
          </div>
          <div className='block1-section1'>
              <h3>OFICIAL</h3>
              <h3>STF confirma suspeição de Sergio Moro na ação do triplex do Guarujá</h3>
              <p><b>Fonte:</b> Supremo Tribunal Federal (STF)</p>
              <p><b>O que sustenta no panfleto:</b> Sustenta a frase de que o STF reconheceu a parcialidade/suspeição de Sergio Moro no caso do triplex, anulando suas decisões nesse processo.</p>
              <a href="https://noticias.stf.jus.br/postsnoticias/stf-confirma-suspeicao-de-sergio-moro-na-acao-do-triplex-do-guaruja/" target="_blank" rel="noopener noreferrer">Link para a fonte</a>
          </div>
          <div className='imprensa-section'>
              <h3>IMPRENSA</h3>
              <h3>Justiça arquiva caso de tríplex de Guarujá atribuído a Lula</h3>
              <p><b>Fonte:</b> Folha de S.Paulo</p>
              <p><b>O que sustenta no panfleto:</b>  Sustenta a afirmação de que o processo acabou arquivado por prescrição em 2022. Use com o cuidado de dizer 'arquivado por prescrição', e não 'absolvido'.</p>
              <a href="https://www1.folha.uol.com.br/poder/2022/01/justica-arquiva-caso-de-triplex-de-guaruja-atribuido-a-lula.shtml" target="_blank" rel="noopener noreferrer">Link para a fonte</a>
          </div>
          <h2 className='title-one'>2) Programas e políticas de Lula citados na seção “Carreira política”</h2>
          <div className='block1-section1'>
              <h3>OFICIAL</h3>
              <h3>LEI Nº 10.836, DE 9 DE JANEIRO DE 2004 — Cria o Programa Bolsa Família</h3>
              <p><b>Fonte:</b> Presidência da República / Casa Civil</p>
              <p><b>O que sustenta no panfleto:</b> Sustenta o item 'Bolsa Família — transferência de renda'.</p>
              <a href="https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2004/lei/l10.836.htm" target="_blank" rel="noopener noreferrer">Link para a fonte</a>
          </div>
          <div className='block1-section1'>
              <h3>OFICIAL</h3>
              <h3>LEI Nº 11.096, DE 13 DE JANEIRO DE 2005 — Institui o Programa Universidade para Todos (Prouni)</h3>
              <p><b>Fonte:</b> Presidência da República / Casa Civil</p>
              <p><b>O que sustenta no panfleto:</b> Sustenta o item 'Prouni — bolsas no ensino superior'.</p>
              <a href="https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/lei/l11096.htm" target="_blank" rel="noopener noreferrer">Link para a fonte</a>
          </div>
          <div className='block1-section1'>
              <h3>OFICIAL</h3>
              <h3>LEI Nº 11.977, DE 7 DE JULHO DE 2009 — Dispõe sobre o Programa Minha Casa, Minha Vida</h3>
              <p><b>Fonte:</b> Presidência da República / Casa Civil</p>
              <p><b>O que sustenta no panfleto:</b> Sustenta o item 'Minha Casa, Minha Vida — habitação popular'.</p>
              <a href="https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2009/lei/l11977.htm" target="_blank" rel="noopener noreferrer">Link para a fonte</a>
          </div>
          <div className='levantamento-section'>
              <h3>LEVANTAMENTO</h3>
              <h3>Prometeu? Cumpriu? — 36 promessas da campanha de 2022</h3>
              <p><b>Fonte:</b> Prometômetro (com base no levantamento do g1, atualizado em 06/10/2026)</p>
              <p><b>O que sustenta no panfleto:</b> Sustenta o quadro com 36 promessas analisadas: 26 cumpridas, 4 em parte/em andamento e 6 não cumpridas.</p>
              <a href="https://prometometro.com.br/promessas/" target="_blank" rel="noopener noreferrer">Link para a fonte</a>
          </div>
          <h2 className='title-one'>3) Flávio Bolsonaro — trajetória e posição institucional</h2>
          <div className='block1-section1'>
              <h3>OFICIAL</h3>
              <h3>Senador Flávio Bolsonaro — perfil parlamentar</h3>
              <p><b>Fonte:</b> Senado Federal</p>
              <p><b>O que sustenta no panfleto:</b> Sustenta a informação de que Flávio Bolsonaro é senador pelo Rio de Janeiro, com mandato iniciado em 2019.</p>
              <a href="https://www25.senado.leg.br/web/senadores/senador/-/perfil/5894" target="_blank" rel="noopener noreferrer">Link para a fonte</a>
          </div>
          <div className='block1-section1'>
              <h3>OFICIAL</h3>
              <h3>Deputado estadual Flávio Bolsonaro — legislaturas e atuação</h3>
              <p><b>Fonte:</b> Assembleia Legislativa do Estado do Rio de Janeiro (ALERJ)</p>
              <p><b>O que sustenta no panfleto:</b> Pode ser usado para sustentar o período em que ele foi deputado estadual antes do Senado.</p>
              <a href="https://www.alerj.rj.gov.br/Deputados/Deputado?codigo=154" target="_blank" rel="noopener noreferrer">Link para a fonte</a>
          </div>
          <h2 className='title-one'>4) Daniel Vorcaro, Banco Master e a menção no panfleto</h2>
          <div className='block1-section1'>
              <h3>OFICIAL</h3>
              <h3>BC decreta liquidação extrajudicial do Banco Master</h3>
              <p><b>Fonte:</b> Banco Central do Brasil</p>
              <p><b>O que sustenta no panfleto:</b> Sustenta a informação de que houve intervenção/liquidação do Banco Master por decisão do Banco Central.</p>
              <a href="https://www.bcb.gov.br/detalhenoticia/20936/nota/undefined" target="_blank" rel="noopener noreferrer">Link para a fonte</a>
          </div>
            <div className='imprensa-section'>
              <h3>IMPRENSA</h3>
              <h3>Entenda a relação entre Flávio e Daniel Vorcaro</h3>
              <p><b>Fonte:</b> Folha de S.Paulo (webstory/reportagem)</p>
              <p><b>O que sustenta no panfleto:</b> Ajuda a sustentar a linha do tempo do relacionamento político-financeiro citada no panfleto.</p>
              <a href="https://www1.folha.uol.com.br/webstories/politica/2026/05/entenda-a-relacao-entre-flavio-bolsonaro-e-daniel-vorcaro/" target="_blank" rel="noopener noreferrer">Link para a fonte</a>
          </div>
          <div className='imprensa-section'>
              <h3>IMPRENSA</h3>
              <h3>Flávio Bolsonaro, Vorcaro e o filme mais caro do Brasil</h3>
              <p><b>Fonte:</b> Folha de S.Paulo (coluna/reportagem)</p>
              <p><b>O que sustenta no panfleto:</b> Sustenta os números de R$ 134 milhões negociados e cerca de R$ 61 milhões repassados para o filme 'Dark Horse', conforme apuração jornalística.</p>
              <a href="https://www1.folha.uol.com.br/colunas/adriana-fernandes/2026/05/flavio-bolsonaro-vorcaro-e-o-filme-mais-caro-do-brasil.shtml" target="_blank" rel="noopener noreferrer">Link para a fonte</a>
          </div>
          <div className='imprensa-section'>
              <h3>IMPRENSA</h3>
              <h3>PF: Flávio Bolsonaro se encontrou ao menos quatro vezes com Daniel Vorcaro</h3>
              <p><b>Fonte:</b> CNN Brasil</p>
              <p><b>O que sustenta no panfleto:</b> Ajuda a sustentar a informação sobre encontros e comunicação entre Flávio Bolsonaro e Daniel Vorcaro no contexto da investigação.</p>
              <a href="https://www.cnnbrasil.com.br/blogs/larissa-rodrigues/politica/pf-flavio-bolsonaro-se-encontrou-ao-menos-quatro-vezes-co m-daniel-vorcaro/" target="_blank" rel="noopener noreferrer">Link para a fonte</a>
          </div>
      </div>
    </>
  )
}

export default App
