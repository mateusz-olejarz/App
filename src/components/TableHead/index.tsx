import React from 'react'
import { uniqueId } from 'lodash'
import { ReactComponent as Arrow } from '../../assets/images/arrow.svg'
import * as S from './styles'
import * as C from '../../content'


const TableHead: React.FC = (): React.ReactElement => {
    const headings: Array<string> = C.TABLE.headings

    return (
        <S.TableHead>
            <tr>
                {headings.map((heading: string) => (
                    <th key={uniqueId()}>
                        <S.TableHeading>
                            <S.Arrow>
                                <Arrow />
                            </S.Arrow>
                            {heading}
                        </S.TableHeading>
                    </th>
                ))}
            </tr>
        </S.TableHead>
    )
}

export default TableHead
